import AutoLink from '../auto-link';
import React from 'react';

function MeIntro() {
	return (
		<p>
			I am an artist, engineer, and educator. My work has been featured
			on NPR, the CBC, HuffPost, Canadian Business, and elsewhere. I
			volunteer at{' '}
			<AutoLink to="https://repairmatters.ca/">Repair Matters</AutoLink>{' '}
			and{' '}
			<AutoLink to="https://www.canadalearningcode.ca/">
				Canada Learning Code
			</AutoLink>
			, and am slowly developing my thoughts on{' '}
			<AutoLink to="https://github.com/miseryco/curriculum">
				what digital literacy means on today’s Internet
			</AutoLink>
			. I founded the studio{' '}
			<AutoLink to="https://misery.co">Misery & Co.</AutoLink> and am
			taking commissions.
		</p>
	);
}

export default MeIntro;
