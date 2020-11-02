import styled from 'styled-components';
import { WrapperTypes } from './index';

export const Wrapper = styled.div<WrapperTypes>`
	height: 100%;

	.progress {
		top: 50%;
		right: 48%;
		position: absolute;
	}

	.virtualList {
		border-radius: 10px;

		.Row {
			overflow: hidden;
			border: 1px #95a080 solid;
			cursor: pointer;
			@media only screen and (max-width: 600px) {
				display: flex;
				flex-wrap: wrap;
				flex-direction: row;
			}
			@media only screen and (min-width: 601px) {
				display: flex;
			}
			:hover {
				opacity: 90%;
			}
			:visited {
				text-decoration: line-through;
			}
		}

		.from {
		}

		.viewFrom {
			width: ${(p) => p.width.fromWidth + '%'};
			padding: 0.8% 0% 0.8% 0.8%;
		}
		.viewTitle {
			width: ${(p) => p.width.titleWidth + '%'};
			padding: 0.8% 0% 0.8% 0%;
		}
		.viewAuthor {
			width: ${(p) => p.width.authorWidth + '%'};
			padding: 0.8% 0% 0.8% 0%;
		}
		.viewHitCount {
			width: ${(p) => p.width.hitCountWidth + '%'};
			padding: 0.8% 0% 0.8% 0%;
		}
		.viewDate {
			width: ${(p) => p.width.dateWidth + '%'};
			padding: 0.8% 0% 0.8% 0%;
		}
	}

	.Etoland {
		background-color: #499a22;
	}
	.Ilbe {
		background-color: red;
	}
	.Bobae {
		background-color: #0070bc;
	}
	.82cook {
		background-color: #cdf6cf;
	}
	.DogDrip {
		background-color: #2e4361;
	}
	.FmKorea {
		background-color: #4d78d1;
	}
	.TodayHumor {
		background-color: #009dbd;
	}
	.MLBPark {
		background-color: #5181e3;
	}
	.HumorUniv {
		background-color: #ee4e72;
	}
	.Ppomppu {
		background-color: #ee5aff;
	}
	.RuliWeb {
		background-color: #1a6fdc;
	}
	.SLR {
		background-color: #53a7ec;
	}
	.TheQoo {
		background-color: #375472;
	}
	.YGosu {
		background-color: #353c3f;
	}
	.Clien {
		background-color: #23303e;
	}
	.DDanzi {
		background-color: #222323;
	}
	.Gasengi {
		background-color: #536274;
	}
	.OPGG {
		background-color: black;
	}
`;
