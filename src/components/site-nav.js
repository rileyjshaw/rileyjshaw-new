import React, {useState} from 'react';
import {Link} from 'gatsby';

import {ReactComponent as MenuIcon} from '../../content/images/menu.svg';
import {useKeyPress} from '../util/hooks';
import Wrap from './wrap';

import './site-nav.css';

export default () => {
	const [open, setOpen] = useState(false);
	useKeyPress('Escape', () => setOpen(false));

	return (
		<nav className="site-nav">
			<button
				aria-expanded={open}
				aria-controls="menu"
				aria-haspopup="true"
				id="menubutton"
				className={open ? 'open' : 'closed'}
				onClick={() => setOpen(o => !o)}
			>
				{open ? '✖' : <MenuIcon />}
			</button>
			<ul
				aria-labelledby="menubutton"
				id="menu"
				role="menu"
				hidden={!open}
				onClick={() => setOpen(o => !o)}
			>
				<li>
					<Link to="/">
						<Wrap>Home</Wrap>
					</Link>
				</li>
				<li>
					<Link to="/about">
						<Wrap>About</Wrap>
					</Link>
				</li>
				<li>
					<Link to="/explore">
						<Wrap>Projects</Wrap>
					</Link>
				</li>
				<li>
					<Link to="/blog">
						<Wrap>Blog</Wrap>
					</Link>
				</li>
				<li>
					<Link to="/subscribe">
						<Wrap>Subscribe</Wrap>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
