import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 200px;
	height: 200px;
	position: relative;
	display: inline-block;
	margin: 5px;
	border-radius: 100px;
	overflow: hidden;
`;

const VideoContainer = styled.video`
	width: 220px;
	height: 220px;
	background-color: black;
	background-border: 50px;
	transform: rotateY(180deg);
    -webkit-transform:rotateY(180deg); 
    -moz-transform:rotateY(180deg); 
`;

const UserLabel = styled.p`
	display: inline-block;
	position: absolute;
	top: 230px;
	left: 0px;
`;

interface Props { //typescript
	email: string;
	stream: MediaStream;
	muted?: boolean;
}

const Video = ({ email, stream, muted }: Props) => {
	const ref = useRef<HTMLVideoElement>(null);
	const [isMuted, setIsMuted] = useState<boolean>(false);

	useEffect(() => {
		if (ref.current) ref.current.srcObject = stream;
		if (muted) setIsMuted(muted);
	}, [stream, muted]);

	return (
		<Container>
			<VideoContainer ref={ref} muted={!isMuted} autoPlay />
			<UserLabel>{email}</UserLabel>
		</Container>
	);
};

export default Video;
