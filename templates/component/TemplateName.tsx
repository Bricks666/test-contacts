import * as React from 'react';
import classNames from 'classnames';
import { CommonProps } from '@/interfaces/common';
import { StylesWrapper } from './styles';

export interface TemplateNameProps extends CommonProps {}

export const TemplateName: React.FC<TemplateNameProps> = React.memo(
	function TemplateName(props) {
		const { className } = props;
		return <StylesWrapper className={className}></StylesWrapper>;
	}
);
