import React, { useState } from "react";
import Container from "../../../Components/Container/container";
import ContentContainer from "../../../Components/ContainerContents/container";
import Line from "../../../Components/Line/line";
import styles from "./projects.module.scss";
import works from "./data";
import Button from "../../../Components/Button/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variant = {
	hidden: {
		x: -200,
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1.5,
		},
	},
};

const Projects = () => {
	const [more, setMore] = useState(4);
	return (
		<Container>
			<ContentContainer>
				<motion.section
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					variants={variant}
					id="work"
					className={styles.main}
				>
					<div className={styles.divide}>
						<div className="lineStyle">
							<p className={`heading head`}>
								<span className="spans">03.</span>Work
							</p>
							<Line />
						</div>
						{works
							.filter((_, idx) => idx < more)
							.map((itm) => {
								const {
									id,
									img,
									projectName,
									projectDescription,
									tools,
									github,
									link,
									liveLink,
									githubLink,
								} = itm;
								return (
									<Link to={liveLink} target="_blank" key={id}>
										<motion.div className={styles.section}>
											<div
												className={
													id % 2 !== 0
														? styles.prjScreenshot
														: `${`${styles.prjScreenshotAlt} ${styles.prjScreenshot}`}`
												}
											>
												<img src={img} alt="img" className={styles.prj} />
												<div className={styles.overlay} />
											</div>
											<div
												className={
													id % 2 !== 0
														? styles.prjDetails
														: `${`${styles.prjDetailsAlt} ${styles.prjDetails}`}`
												}
											>
												<p className={styles.prjName}>{projectName}</p>
												<p className={styles.projectDetails}>
													{projectDescription}
												</p>
												<div className={styles.toolsGrp}>
													<div className={styles.tools}>
														<div className={styles.toolContainer}>
															{tools.map((tool, idx) => {
																return (
																	<div key={idx}>
																		<p
																			className={
																				styles.toolsList
																			}
																		>
																			{tool}
																		</p>
																	</div>
																);
															})}
														</div>
													</div>
													<div className={styles.links}>
														{githubLink ? (
															<Link
																to={githubLink}
																target="_blank"
																className={styles.link}
															>
																{github}
															</Link>
														) : undefined}
														<Link
															to={liveLink}
															target="_blank"
															className={styles.link}
														>
															{link}
														</Link>
													</div>
												</div>
											</div>
										</motion.div>
									</Link>
								);
							})}
						{more >= 9 ? (
							""
						) : (
							<div className={styles.showMore}>
								<Button
									btnType="more"
									onClick={() => setMore((count) => count + 2)}
								>
									Show more
								</Button>
							</div>
						)}
					</div>
				</motion.section>
			</ContentContainer>
		</Container>
	);
};

export default Projects;
