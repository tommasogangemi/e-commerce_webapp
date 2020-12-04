import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;

	span {
		display: flex;
	}

	.title {
		font-size: 28px;
		margin-bottom: 25px;
		cursor: pointer;
	}
`;

export const PreviewContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
