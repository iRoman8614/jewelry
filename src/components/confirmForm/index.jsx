import styles from './styles.module.scss'

import logoSrc from '../../assets/logo.png';
import {FormListItem} from "@/components/formListItem/index.jsx";
import { useForm } from 'react-hook-form';

export const ConfirmForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        // Здесь будет логика отправки данных на сервер
        alert('Данные формы отправлены! Смотрите консоль.');
    };

    const deliveryOptions = [
        { id: 'delivery1', value: 'courierMoscowWithinMKAD', label: 'КУРЬЕР ПО МОСКВЕ (В ПРЕДЕЛАХ МКАД) 1000 ₽', price: 1000 },
        { id: 'delivery2', value: 'courierMoscowOutsideMKAD', label: 'КУРЬЕР ЗА МКАД ПО МОСКВЕ И МО 1100 ₽', price: 1100 },
        { id: 'delivery3', value: 'sdekRussia', label: 'СДЭК ПО РОССИИ (ДО ПУНКТА ИЛИ АДРЕСА) 700 ₽', price: 700 },
        { id: 'delivery4', value: 'sdekCIS', label: 'СДЭК В СТРАНЫ СНГ 800 ₽', price: 800 },
        { id: 'delivery5', value: 'internationalPost', label: 'МЕЖДУНАРОДНАЯ ДОСТАВКА ПОЧТОЙ РОССИИ 1900', price: 1900 },
    ];

    const paymentOptions = [
        { id: 'payment1', value: 'creditCard', label: 'КРЕДИТНОЙ КАРТОЙ (МИР, VISA, MASTERCARD)' },
        { id: 'payment2', value: 'paypalInternational', label: 'PAYPAL ИНТЕРНАЦИОНАЛЬНАЯ ДОСТАВКА' },
        { id: 'payment3', value: 'tbankInstallments', label: 'ДОЛЯМИ ОТ Т-БАНК' },
        { id: 'payment4', value: 'sbp', label: 'СБП' },
    ];

    const totalAmount = "198K"; // Или можно было бы использовать RUB символ ₽, например 198000 ₽

    return(
        <div className={styles.root}>
            <img className={styles.logo} src={logoSrc} alt={''} />
            <div className={styles.itemList}>
                <FormListItem />
                <FormListItem />
            </div>
            <div className={styles.totalSection}>
                ИТОГО
                <span>{totalAmount}</span>
            </div>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formGroup}>
                        <label htmlFor="fullName" className={styles.label}>ФИО</label>
                        <input
                            id="fullName"
                            type="text"
                            className={styles.input}
                            {...register('fullName', { required: 'ФИО обязательно для заполнения' })}
                        />
                        {errors.fullName && <p className={styles.error}>{errors.fullName.message}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>ПОЧТА</label>
                        <input
                            id="email"
                            type="email"
                            className={styles.input}
                            {...register('email', {
                                required: 'Почта обязательна для заполнения',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Неверный формат email адреса'
                                }
                            })}
                        />
                        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.label}>ТЕЛЕФОН</label>
                        <input
                            id="phone"
                            type="tel"
                            className={styles.input}
                            {...register('phone', {
                                required: 'Телефон обязателен для заполнения',
                                pattern: {
                                    value: /^[+]?[0-9\s\-()]{7,20}$/,
                                    message: 'Неверный формат телефона'
                                }
                            })}
                        />
                        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address" className={styles.label}>АДРЕС</label>
                        <textarea
                            id="address"
                            className={styles.textarea}
                            {...register('address', { required: 'Адрес обязателен для заполнения' })}
                        />
                        {errors.address && <p className={styles.error}>{errors.address.message}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <p className={styles.label}>ДОСТАВКА</p>
                        <div className={styles.radioGroup}>
                            {deliveryOptions.map(option => (
                                <div key={option.id} className={styles.radioOption}>
                                    <input
                                        type="radio"
                                        id={option.id}
                                        value={option.value}
                                        {...register('deliveryMethod', { required: 'Выберите способ доставки' })}
                                    />
                                    <label htmlFor={option.id}>{option.label}</label>
                                </div>
                            ))}
                        </div>
                        {errors.deliveryMethod && <p className={styles.error}>{errors.deliveryMethod.message}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="comments" className={styles.label}>КОММЕНТАРИИ</label>
                        <textarea
                            id="comments"
                            className={styles.textarea}
                            {...register('comments')}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <p className={styles.label}>СПОСОБ ОПЛАТЫ</p>
                        <div className={styles.radioGroup}>
                            {paymentOptions.map(option => (
                                <div key={option.id} className={styles.radioOption}>
                                    <input
                                        type="radio"
                                        id={option.id}
                                        value={option.value}
                                        {...register('paymentMethod', { required: 'Выберите способ оплаты' })}
                                    />
                                    <label htmlFor={option.id}>{option.label}</label>
                                </div>
                            ))}
                        </div>
                        {errors.paymentMethod && <p className={styles.error}>{errors.paymentMethod.message}</p>}
                    </div>

                    <div className={styles.totalSection}>
                        ИТОГО
                        <span>{totalAmount}</span>
                    </div>
                    <button type="submit" className={styles.submitButton}>ОПЛАТИТЬ</button>
                </form>
            </div>
            <img className={styles.logo} src={logoSrc} alt={''} />
        </div>
    )
}