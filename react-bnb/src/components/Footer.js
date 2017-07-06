import React from 'react';

export default class Footer extends React.Component {

	render () {

		return (

			<div>
				<footer>
					<ul>
						<li>{ this.props.person1 }</li>
						<li>{ this.props.person2 }</li>
					</ul>
				</footer>
			</div>

		);

	}

}