import React from "react";
import ContentContainer from "../../../Components/ContainerContents/container";
import Container from "../../../Components/Container/container";
import styles from "./contact.module.scss";
import Button from "../../../Components/Button/button";
const Contact = () => {
	const [copied, setCopied] = React.useState(false);
	const email = "chijioke1ezeh@gmail.com";

	const handleCopy = () => {
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<Container>
			<ContentContainer>
				<section id="contact" className={styles.head}>
					<div className={styles.content}>
						<div className={styles.shalaye}>
							<p className={styles.contact}>
								<span className="spans">04.</span> Contact
							</p>
							<p className={`heading ${styles.reach}`}>Get in touch .</p>
							<p className={styles.GodAbeg}>
								I'm open to paid opportunities and internships, eager to grow and
								take on new challenges in web development. Feel free to reach out!
							</p>
						</div>
						<div className={styles.btn}>
							<div onClick={handleCopy} style={{cursor: 'pointer'}}>
								<p style={{color:"#fff", fontSize:"19px"}}>{email}</p>
								<p style={{color:"#f9f9f9", fontSize:"15px"}}>{copied ? 'Copied!' : 'Click to copy'}</p>
							</div>
						</div>
					</div>
				</section>
			</ContentContainer>
		</Container>
	);
};

export default Contact;
