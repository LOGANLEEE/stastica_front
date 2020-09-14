import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Popper, Button, IconButton, FormControlLabel, Switch } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

import { Essential } from 'app';
import { SET_VIEW_OPTION, selectViewOption, ViewOption } from 'container/Ui/Slice';

import { Wrapper, PopperWrapper } from './Wrapper';
import { RootState } from 'store';

interface FadeProps {
	children?: React.ReactElement;
	in?: boolean;
	onEnter?: () => {};
	onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
	const { in: open, children, onEnter, onExited, ...other } = props;
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter();
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited();
			}
		},
	});

	return (
		<animated.div ref={ref} style={style} {...other}>
			{children}
		</animated.div>
	);
});

interface Props {}

export const ListOption = ({ isDark }: Props & Essential) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const dispatch = useDispatch();
	const ViewOption: ViewOption = useSelector(selectViewOption);
	const { viewAuthor, viewDate, viewHitCount, viewFrom }: ViewOption = ViewOption;

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'spring-popper' : undefined;

	return (
		<Wrapper>
			<button type='button' className='btn' onClick={handleClick}>
				<Visibility />
				<span>보기 옵션</span>
			</button>
			<Popper id={id} open={open} anchorEl={anchorEl} transition>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps}>
						<PopperWrapper>
							<FormControlLabel
								checked={viewFrom}
								control={
									<Switch
										color='secondary'
										onChange={() =>
											dispatch(SET_VIEW_OPTION({ ...ViewOption, viewFrom: !viewFrom }))
										}
									/>
								}
								label='출처'
								labelPlacement='start'
							/>
							<FormControlLabel
								checked={viewAuthor}
								control={
									<Switch
										color='secondary'
										onChange={() =>
											dispatch(SET_VIEW_OPTION({ ...ViewOption, viewAuthor: !viewAuthor }))
										}
									/>
								}
								label='작성자'
								labelPlacement='start'
							/>
							<FormControlLabel
								checked={viewHitCount}
								control={
									<Switch
										color='secondary'
										onChange={() =>
											dispatch(SET_VIEW_OPTION({ ...ViewOption, viewHitCount: !viewHitCount }))
										}
									/>
								}
								label='조회수'
								labelPlacement='start'
							/>
							<FormControlLabel
								checked={viewDate}
								control={
									<Switch
										color='secondary'
										onChange={() =>
											dispatch(SET_VIEW_OPTION({ ...ViewOption, viewDate: !viewDate }))
										}
									/>
								}
								label='일자'
								labelPlacement='start'
							/>
						</PopperWrapper>
					</Fade>
				)}
			</Popper>
		</Wrapper>
	);
};
