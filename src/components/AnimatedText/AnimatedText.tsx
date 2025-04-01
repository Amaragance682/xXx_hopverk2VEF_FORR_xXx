import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import React from "react";

const AnimatedText = ({ text, isOn, speed = 0.6 }) => {
	const [lines, setLines] = useState([]);

	useEffect(() => {
		setLines(text.split("\n"));
	}, [text]);

	const container = {
		hidden: {
			transition: {
				when: "beforeChildren",
			},
		},
		visible: {
			transition: {
				when: "afterChildren",
				staggerChildren: speed / text.length,
			},
		},
	};

	const child = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				opacity: {
					type: "tween",
					damping: 12,
					stiffness: 100,
				},
				y: {
					type: "tween",
					damping: 12,
					stiffness: 100,
				},
			},
		},
		hidden: {
			opacity: 0,
			y: 20,
			transition: {
				opacity: {
					type: "tween",
					damping: 12,
					stiffness: 100,
				},
				y: {
					type: "tween",
					damping: 12,
					stiffness: 100,
				},
			},
		},
	};

	return (
		<div
			style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
		>
			<motion.div
				variants={container}
				animate={isOn ? "visible" : "hidden"}
				initial="hidden"
				style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
				className="gap-5"
			>
				{lines.map((line, lineIndex) => (
					<motion.div
						key={lineIndex}
						style={{ display: "flex", justifyContent: "center" }}
					>
						{line.split("").map((letter, charIndex) => (
							<motion.span key={charIndex} variants={child}>
								{letter === " " ? "\u00A0" : letter}
							</motion.span>
						))}
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default AnimatedText;
