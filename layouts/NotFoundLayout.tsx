import { JSXElementConstructor, ReactElement } from "react";

const NotFoundLayout = ({ children }: { children: ReactElement }) => {
	return <>{children}</>;
};

export const getLayout = (
	page: ReactElement<any, string | JSXElementConstructor<any>>
) => <NotFoundLayout>{page}</NotFoundLayout>;
