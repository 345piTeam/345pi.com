export interface Post {
	_id: string;
	_createdAt: string;
	_updatedAt: string;
	title: string;
	author: {
		name: string;
		image: string;
	};
	mainImage: {
		asset: {
			_ref: string;
		};
	};
	slug: {
		current: string;
	};
	body: object[];
}

export interface HomepageInformation {
	slug: {
		current: string;
	};
	title: string;
	mainImage: {
		asset: {
			_ref: string;
		};
	};
	body: object[];
}

export interface DarkLord {
	name: string;
	userName: string;
	slug: {
		current: string;
	};
	image: {
		asset: {
			_ref: string;
		};
	};
	bio: object[];
}
