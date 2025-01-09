import { body } from "express-validator";

export const registerValidator = [
  body("email")
    .isEmail().withMessage('Пожалуйста, введите действительный адрес электронной почты.'),
  body("password")
    .isLength({ min: 5 }).withMessage('Пароль должен содержать не менее 5 символов.'),
  body("fullname")
    .isLength({ min: 3 }).withMessage('Полное имя должно содержать не менее 3 символов.'),
  body("avatarUrl")
    .optional()
    .isURL().withMessage('Пожалуйста, введите правильный URL для аватара, если вы его указываете.')
];

export const loginValidator = [
  body("email")
    .isEmail().withMessage('Пожалуйста, введите действительный адрес электронной почты.'),
  body("password")
    .isLength({ min: 5 }).withMessage('Пароль должен содержать не менее 5 символов.')
];

export const postCreateValidator = [
  body("title")
    .isLength({ min: 5 }).withMessage('Заголовок должен содержать не менее 5 символов.'),
  body("text")
    .isLength({ min: 10 }).withMessage('Текст должен содержать не менее 10 символов.'),
  body("tags")
    .optional().isString().withMessage('Формат тэгов должен быть массивом. '),
  body("imageUrl")
    .optional().isString().withMessage('Пожалуйста, введите правильный URL для изображения, если вы его указываете.')
];