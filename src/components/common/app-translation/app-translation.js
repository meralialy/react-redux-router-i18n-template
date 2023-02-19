import React from "react";
import PropTypes from "prop-types";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n";

const AppTranslation = ({ children }) => {
	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

AppTranslation.propTypes = {
	children: PropTypes.node,
};

export default AppTranslation;
