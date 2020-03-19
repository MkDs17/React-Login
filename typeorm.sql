-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 19 Mars 2020 à 16:07
-- Version du serveur :  5.6.15-log
-- Version de PHP :  5.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `typeorm`
--

-- --------------------------------------------------------

--
-- Structure de la table `company`
--

CREATE TABLE IF NOT EXISTS `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_a76c5cd486f7779bd9c319afd2` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Contenu de la table `company`
--

INSERT INTO `company` (`id`, `name`, `logo`, `createdAt`, `updatedAt`) VALUES
(2, 'Microsoft', 'https://www.silicon.fr/wp-content/uploads/2012/08/Nouveau-Logo-Microsoft-%C2%A9-Microsoft-645x513.jpg', '2020-03-15 17:07:26.824331', '2020-03-15 17:07:26.879792'),
(3, 'Sony', 'https://cdn.1min30.com/wp-content/uploads/2017/04/Sony-logo-1.jpg', '2020-03-15 17:07:26.824331', '2020-03-15 17:07:26.879792'),
(4, 'Tesla', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/793px-Tesla_Motors.svg.png', '2020-03-15 17:07:26.824331', '2020-03-15 17:07:26.879792'),
(5, 'Apple', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png', '2020-03-15 17:07:26.824331', '2020-03-15 17:07:26.879792'),
(6, 'GitHub', NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000'),
(7, 'NSP', NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `companyId` int(11) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_78a916df40e02a9deb1c4b75ed` (`username`),
  KEY `FK_86586021a26d1180b0968f98502` (`companyId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `username`, `designation`, `companyId`, `password`, `role`, `createdAt`, `updatedAt`, `name`) VALUES
(1, 'sjobs', 'CEO', 5, '$2a$08$mXQZA55im/hG7okl6ACPne0YcQItJMt/MJyHTVqp3j1T8/s1e2KCy', 'USER', '2020-03-15 12:35:12.099056', '2020-03-16 16:54:45.000000', 'S. Jobs'),
(2, 'bgates', 'CEO', 2, '$2a$08$u5FopAHa6xkAFfOiR7/q3uN6Kr10TLPVVhiYWqbl0BfQsaEJVctT2', 'USER', '2020-03-15 12:35:12.099056', '2020-03-16 16:54:57.000000', 'B. Gates'),
(3, 'emusk', 'CEO', 4, '$2a$08$E9RPvbTzaznhhQdR47xIeeziO57vBrk.2xaf7BUXi/KBgpx2l3Qd.', 'USER', '2020-03-15 12:35:12.099056', '2020-03-16 16:55:06.000000', 'E. Musk'),
(4, 'tcook', 'CEO', 5, '$2a$08$enKyG.g4dqHMDhTOhmGwIuqQjSJ../1iEcWDzV5HJqvZ/qjJeSvl.', 'USER', '2020-03-15 12:35:12.099056', '2020-03-16 16:55:14.000000', 'T. Cook'),
(5, 'admin', 'CEO', 6, '$2a$08$kSuI9iEOAuv.u3gjevpSBer7lOLm8I4KEW02PAMiWwUA9T5yplRwK', 'ADMIN', '2020-03-15 17:45:51.485058', '2020-03-19 11:31:44.000000', 'A. Dmyn'),
(6, 'user', 'employee', 6, '$2a$08$xyNek2U87yqKh4wcoe9Vje9xQl8nsNTIsqbx95pzNGZFpBAA8xZIi', 'USER', '2020-03-15 18:05:28.677740', '2020-03-19 11:31:29.000000', 'U. Zher'),
(7, 'test', 'agent', 7, '$2a$08$emJM3E0cP1VrTxymHas.7Oalw9uIbRzBr7WYVFLGi4mNl.ct7bkea', 'USER', '2020-03-16 16:15:10.181954', '2020-03-18 14:49:21.000000', 'test');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_86586021a26d1180b0968f98502` FOREIGN KEY (`companyId`) REFERENCES `company` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
