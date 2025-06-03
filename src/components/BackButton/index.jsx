import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "@/pages/category/styles.module.scss";

export const BackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div onClick={handleGoBack} className={styles.back}>back</div>
    );
};