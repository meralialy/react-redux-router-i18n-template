import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { catApi } from "../../../redux/apis";

const Home = () => {
	const { t } = useTranslation();
	const { fact } = useSelector((state) => state.cat);

	catApi.useGetFactQuery();

	return (
		<div data-testid="home">
			<div data-testid="i18n">{t("cat-fact")}</div>
			<div data-testid="redux">{fact}</div>
		</div>
	);
};

export default Home;
