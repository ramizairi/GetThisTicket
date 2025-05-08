-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : dim. 26 mai 2024 à 21:08
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `getthisticket`
--

-- --------------------------------------------------------

--
-- Structure de la table `address`
--

DROP TABLE IF EXISTS `address`;
CREATE TABLE IF NOT EXISTS `address` (
  `id` int NOT NULL,
  `id_user` int NOT NULL,
  `street` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `zipcode` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `address`
--

INSERT INTO `address` (`id`, `id_user`, `street`, `city`, `state`, `zipcode`) VALUES
(0, 1, '406 rue nigeria riadh 5', 'Sousse', 'Riadh', '4023');

-- --------------------------------------------------------

--
-- Structure de la table `admins`
--

DROP TABLE IF EXISTS `admins`;
CREATE TABLE IF NOT EXISTS `admins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `balcon`
--

DROP TABLE IF EXISTS `balcon`;
CREATE TABLE IF NOT EXISTS `balcon` (
  `id` int NOT NULL AUTO_INCREMENT,
  `eventID` int NOT NULL,
  `price` double NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `eventID` (`eventID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `balcon`
--

INSERT INTO `balcon` (`id`, `eventID`, `price`, `quantity`) VALUES
(1, 1, 25, 50),
(2, 2, 30, 50),
(3, 3, 25, 50),
(4, 4, 25, 50),
(5, 5, 30, 40),
(6, 6, 35, 30),
(7, 7, 40, 10),
(8, 8, 32, 22),
(9, 9, 40, 15),
(10, 10, 50, 50),
(11, 11, 30, 20),
(12, 12, 30, 20),
(14, 21, 30, 0);

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `event`
--

DROP TABLE IF EXISTS `event`;
CREATE TABLE IF NOT EXISTS `event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `location` varchar(255) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category` (`category`),
  KEY `category_2` (`category`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `event`
--

INSERT INTO `event` (`id`, `name`, `date`, `location`, `description`, `category`, `image`) VALUES
(2, 'L\\\\\\\'Art de la Communication et de la Prise de Parole en Public', '2024-05-30 00:00:00', 'SOUSSE', 'Cette Masterclass sur les compétences en communication est idéale pour toute personne recherchant plus d\\\\\\\'informations sur les éléments suivants : compétences en communication - communication - communication d\\\\\\\'entreprise - compétence en communication - développement de la personnalité - master class en compétences en communication - communication efficace. De plus, cette masterclass sera un excellent ajout pour toute personne essayant d\\\\\\\'élargir ses connaissances dans les domaines suivants : prise de parole en public - communication d\\\\\\\'entreprise - compétences en présentation.\\\\r\\\\n\\\\r\\\\n REJOIGNEZ-NOUS POUR DEVENIR AUSSI EMPOWERED QUE VOUS RÊVEZ DE L\\\\\\\'ÊTRE\\\\r\\\\n', 'Comedy', 'https://teskerti.tn/uploads/products/1715080134_65ffed3b5a1352ab5961_large.jpg'),
(3, 'Music Concert', '2022-05-15 00:00:00', 'City Park', 'Experience the best music concert of the year', 'Comedy', 'https://teskerti.tn/uploads/products/1713210188_c63f9fedf85b44818b48_large.jpg'),
(4, 'Art Exhibition', '2022-06-20 00:00:00', 'Downtown Gallery', 'Explore stunning artworks from local artists', 'Comedy', 'https://teskerti.tn/uploads/products/1713811671_d29b2ad09bd048c4433b_large.jpg'),
(5, 'Food Festival', '2022-07-10 00:00:00', 'Town Square', 'Indulge in a variety of delicious cuisines', 'Comedy', 'https://teskerti.tn/uploads/products/1713367089_302fa77864cb74686af6_large.jpg'),
(6, 'Tech Conference', '2022-08-05 00:00:00', 'Convention Center', 'Discover the latest in technology innovation', 'Comedy', 'https://teskerti.tn/uploads/products/1713210188_c63f9fedf85b44818b48_large.jpg'),
(7, 'Fashion Show', '2022-09-18 00:00:00', 'Fashion Mall', 'Witness the trendiest fashion designs on the runway', 'Comedy', 'https://teskerti.tn/uploads/products/1713210188_c63f9fedf85b44818b48_large.jpg'),
(8, 'Film Screening', '2022-10-12 00:00:00', 'Cinema Theater', 'Enjoy a screening of classic and new films', 'Comedy', 'https://teskerti.tn/uploads/products/1713210188_c63f9fedf85b44818b48_large.jpg'),
(9, 'Fitness Expo', '2022-11-25 00:00:00', 'Fitness Center', 'Get inspired and motivated to reach your fitness goals', 'Comedy', 'https://teskerti.tn/uploads/products/1713367089_302fa77864cb74686af6_large.jpg'),
(10, 'Science Fair', '2022-12-08 00:00:00', 'Science Museum', 'Explore fascinating experiments and discoveries', 'Comedy', 'https://teskerti.tn/uploads/products/1713210188_c63f9fedf85b44818b48_large.jpg'),
(11, 'Charity Gala', '2023-01-30 00:00:00', 'Luxury Hotel', 'Support a noble cause and make a difference', 'Comedy', 'https://teskerti.tn/uploads/products/1713367089_302fa77864cb74686af6_large.jpg'),
(12, 'Comedy Show', '2023-02-22 00:00:00', 'Comedy Club', 'Laugh out loud with hilarious stand-up performances', 'Comedy', 'https://teskerti.tn/uploads/products/1713367089_302fa77864cb74686af6_large.jpg'),
(21, 'Rami', '2024-05-26 00:00:00', 'Sousse', 'aaaaaaaaa', 'JSP', 'https://teskerti.tn/uploads/products/1715080134_65ffed3b5a1352ab5961_large.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `galerie`
--

DROP TABLE IF EXISTS `galerie`;
CREATE TABLE IF NOT EXISTS `galerie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `eventID` int NOT NULL,
  `price` double NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `galerie`
--

INSERT INTO `galerie` (`id`, `eventID`, `price`, `quantity`) VALUES
(1, 1, 50, 50),
(2, 2, 50, 50),
(3, 3, 50, 30),
(4, 4, 100, 10),
(5, 5, 60, 60),
(6, 6, 120, 15),
(7, 7, 100, 30),
(8, 8, 90, 40),
(9, 9, 70, 20),
(10, 10, 90, 40),
(11, 11, 60, 25),
(12, 12, 90, 40),
(17, 21, 300, 0);

-- --------------------------------------------------------

--
-- Structure de la table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
CREATE TABLE IF NOT EXISTS `notifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `orchestre`
--

DROP TABLE IF EXISTS `orchestre`;
CREATE TABLE IF NOT EXISTS `orchestre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `eventID` int NOT NULL,
  `price` double NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `eventID` (`eventID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `orchestre`
--

INSERT INTO `orchestre` (`id`, `eventID`, `price`, `quantity`) VALUES
(1, 1, 15, 100),
(2, 2, 25, 80),
(3, 3, 20, 300),
(4, 4, 10, 500),
(5, 5, 15, 80),
(6, 6, 20, 300),
(7, 7, 20, 100),
(8, 8, 10, 250),
(9, 9, 10, 300),
(10, 10, 15, 250),
(11, 11, 20, 100),
(12, 12, 15, 150),
(14, 21, 25, 0);

-- --------------------------------------------------------

--
-- Structure de la table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
CREATE TABLE IF NOT EXISTS `tickets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_id` int NOT NULL,
  `user_id` int NOT NULL,
  `type` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  `price` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `event_id` (`event_id`,`user_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
CREATE TABLE IF NOT EXISTS `transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `totalamount` float NOT NULL,
  `payment_methode` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT 'Pending',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `transactions`
--

INSERT INTO `transactions` (`id`, `user_id`, `title`, `date`, `totalamount`, `payment_methode`, `status`) VALUES
(1, 1, 'BOUDCHART 17 MAI', '2024-05-06', 50, 'Credit Card', 'Membership'),
(2, 2, 'Film Screening', '2024-05-07', 25, 'PayPal', 'Membership'),
(3, 1, 'BOUDCHART 17 MAI', '2024-05-08', 75, 'Bank Transfer', 'Membership'),
(4, 2, 'Film Screening', '2024-05-09', 30, 'Debit Card', 'Membership'),
(5, 1, 'L\'Art de la Communication et de la Prise de Parole en Public', '2024-05-10', 20, 'Credit Card', 'Paied'),
(6, 2, 'Food Festival', '2024-05-11', 45, 'PayPal', 'Paied'),
(7, 1, 'Food Festival', '2024-05-12', 60, 'Bank Transfer', 'Paied'),
(8, 2, 'L\'Art de la Communication et de la Prise de Parole en Public', '2024-05-13', 15, 'Debit Card', 'Paied'),
(9, 1, 'Tech Conference', '2024-05-14', 35, 'Credit Card', 'Membership'),
(10, 2, 'L\'Art de la Communication et de la Prise de Parole en Public', '2024-05-15', 40, 'PayPal', 'Membership');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int NOT NULL,
  `website` varchar(255) NOT NULL,
  `about` varchar(255) NOT NULL,
  `usertype` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'client',
  `image` varchar(5000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `fullname`, `username`, `password`, `email`, `phone`, `website`, `about`, `usertype`, `image`) VALUES
(1, 'Med Rami Zairi', 'ramizairi', '$2y$10$9l6X6qwRWfWJlIsy.SsVbuHxlZat5r4l4rxGFfNe.So1hlygjw5xq', 'ramizeyri@gmail.com', 46395570, 'https://med-rami.com', 'hey, i\'ll be the most richest person in the world !', 'client', 'https://scontent.ftun10-2.fna.fbcdn.net/v/t39.30808-6/417411397_1091416458870634_1500684890076771755_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eNB-5tx1hPgQ7kNvgHhuEVj&_nc_ht=scontent.ftun10-2.fna&oh=00_AfCUe0X7lif10479TuXlBmyPRohCA_UiGLsXWcQrGVsCxw&oe=663E01DA'),
(2, 'Test col', 'test123', '$2y$10$OCialrShXxNCDmsFYwL4ZOYL7k1g6uKTcj1140MUjTV2PBCW10toG', 'hlinux217@gmail.com', 0, '', 'me too!', 'admin', 'https://scontent.ftun10-2.fna.fbcdn.net/v/t39.30808-6/417411397_1091416458870634_1500684890076771755_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eNB-5tx1hPgQ7kNvgHhuEVj&_nc_ht=scontent.ftun10-2.fna&oh=00_AfCUe0X7lif10479TuXlBmyPRohCA_UiGLsXWcQrGVsCxw&oe=663E01DA');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `admins`
--
ALTER TABLE `admins`
  ADD CONSTRAINT `admins_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `tickets_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`);

--
-- Contraintes pour la table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
