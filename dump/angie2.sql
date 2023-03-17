-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 12-03-2023 a las 03:42:22
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.2.1

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES latin1 */;

--
-- Base de datos: `angie`
--
CREATE DATABASE IF NOT EXISTS `angie` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `angie`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

DROP TABLE IF EXISTS `categoria`;
CREATE TABLE IF NOT EXISTS `categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `father` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Truncar tablas antes de insertar `categoria`
--

TRUNCATE TABLE `categoria`;
--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `name`, `father`) VALUES
(1, 'Zapatos', 0),
(2, 'Zapatos Para Mujer', 1),
(3, 'Zapatos Para Hombre', 1),
(4, 'Tecnologia', 0),
(5, 'Airpods', 4),
(6, 'Juguetes', 0),
(7, 'Figuras de accion', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `extensions` varchar(255) NOT NULL,
  `Descript` varchar(255) NOT NULL,
  `Pric_C` double NOT NULL,
  `Pric_V` double NOT NULL,
  `categoria` int NOT NULL,
  `upload` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Truncar tablas antes de insertar `producto`
--

TRUNCATE TABLE `producto`;
--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `name`, `extensions`, `Descript`, `Pric_C`, `Pric_V`, `categoria`, `upload`) VALUES
(1, 'Botas Rosa Fuego', 'webp|', 'Botas altas sexys', 100, 1200, 1, '2023-02-11 20:12:37'),
(2, 'Anillo Besto Frendo', 'webp|webp|webp|webp|', 'Como lo vio en la TV', 100, 500, 2, '2023-02-11 20:13:15'),
(3, 'Kimetsu No Yaiba', 'jpeg|webp|webp|webp|webp|jpeg|jpeg|jpeg|jpeg|jpeg|jpeg|webp|jpeg|', 'Figuras de acción de Kimetsu No Yaiba para jugar :v ', 12, 2500, 3, '2023-02-11 20:14:04'),
(4, 'Zapatos de tacon alto', 'webp|', 'Unos rosas', 233, 2500, 1, '2023-02-11 20:21:46'),
(5, 'Iphone 15 pro max turbo cargado', 'webp|', 'Pus el ipone', 400, 23500, 4, '2023-02-11 20:22:18'),
(6, 'Conjunto de zapatos', 'webp|webp|webp|webp|', 'Variedad de zapatos', 12, 2222, 5, '2023-02-11 20:22:53'),
(7, 'Cosplay de mona china', 'webp|', 'Un cosplay sexy', 23, 3234, 8, '2023-02-11 20:23:14'),
(8, 'Supa Zapatos', 'webp|webp|webp|webp|', 'Zapatos altos', 23, 333, 7, '2023-02-11 20:25:51'),
(9, 'Cuerpo humano de juguete', 'webp|webp|webp|', 'Para jugar al vendedor de órganos', 12, 33, 6, '2023-02-11 20:27:13'),
(10, 'Figurita de mona china', 'webp|webp|webp|', 'Una figurita para que te observe', 123, 3333, 7, '2023-02-11 20:27:47'),
(11, 'Tira led', 'webp|', 'tira led para verte pro mientras ves tv', 23, 444, 4, '2023-02-11 20:28:09'),
(12, 'Samsung tablet', 'webp|', 'una tablet samsung', 233, 4444, 2, '2023-02-11 20:28:52'),
(13, 'Camara espia', 'webp|', 'Camara espia, parece juguete', 12, 333, 12, '2023-02-11 20:29:26'),
(14, 'Audifonos pro max', 'webp|', 'Audifonos para escuchar a la chona', 22, 333, 2, '2023-02-11 20:29:47'),
(15, 'Otro producto', 'webp|webp|', 'La descripcion', 12, 333, 123, '2023-02-11 22:56:32'),
(16, 'Zapatillas pro max', 'webp|webp|webp|webp|webp|', 'Las de las pro', 12, 324, 2, '2023-02-12 21:19:11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `pass` varchar(200) NOT NULL,
  `Facebook` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Truncar tablas antes de insertar `user`
--

TRUNCATE TABLE `user`;
--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `correo`, `pass`, `Facebook`) VALUES
(1, 'AL Hubo', '', '', '5660477977408157'),
(3, '', '', '', '');
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
