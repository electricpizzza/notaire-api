-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 13, 2020 at 08:42 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `notaireTest`
--

-- --------------------------------------------------------

--
-- Table structure for table `acte_entity`
--

CREATE TABLE `acte_entity` (
  `id` int(11) NOT NULL,
  `libelle` text NOT NULL,
  `redacteur` text NOT NULL,
  `contenu` text NOT NULL,
  `dateRedaction` text NOT NULL,
  `fichier` text NOT NULL,
  `modelId` int(11) DEFAULT NULL,
  `dossierId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `acte_entity`
--

INSERT INTO `acte_entity` (`id`, `libelle`, `redacteur`, `contenu`, `dateRedaction`, `fichier`, `modelId`, `dossierId`) VALUES
(1, 'Vendre appa', 'hamid', '[{\"maitre\":\"Mr Abderrahim\",\"vendeur\":\"zakariae\",\"Achteur\":\"dianr\",\"bien\":1,\"mantant\":1234534,\"typePay\":\"lorem\"}]', '2020-01-01', '', 4, NULL),
(2, 'date Redaction', '', '[{\"maitre\":\"dateRedaction\"},{\"10\":\"10\"},{\"10\":\"10\"},{\"bien 1\":\"bien 1\"},{\"mantant\":\"1212\"},{\"typePay\":\"ddf\"}]', 'Mon Nov 09 2020', '', 4, NULL),
(3, 'jsdk jsdsd', '', '[{\"maitre\":\"sdsd\"},{\"bien 1\":\"bien 1\"},{\"mantant\":\"1212\"},{\"typePay\":\"sdsd\"},{\"id\":1,\"dialogChoix\":false,\"nom\":\"Vendeur\",\"data\":[{\"id\":31,\"name\":\" zakariae\",\"identif\":\"CD12132\"}]},{\"id\":2,\"dialogChoix\":false,\"nom\":\"Acheteur\",\"data\":[{\"id\":11,\"name\":\"dinar \",\"identif\":\"CD12132\"}]},{\"Vendeur\":\"31\"},{\"Acheteur\":\"11\"}]', 'Wed Nov 11 2020', '', 4, NULL),
(4, 'ddf jsdsd', '', '[{\"maitre\":\"dfdf\"},{\"bien 1\":\"bien 1\"},{\"mantant\":\"213\"},{\"typePay\":\"sfds\"},{\"id\":1,\"dialogChoix\":false,\"nom\":\"Vendeur\",\"data\":[{\"id\":11,\"name\":\"dinar \",\"identif\":\"CD12132\"},{\"id\":31,\"name\":\" zakariae\",\"identif\":\"CD12132\"}]},{\"id\":2,\"dialogChoix\":false,\"nom\":\"Acheteur\",\"data\":[{\"id\":21,\"name\":\"dinar zakariae\",\"identif\":\"CD12132\"}]},{\"Vendeur\":\"11,31\"},{\"Acheteur\":\"21\"}]', 'Wed Nov 11 2020', '', 4, NULL),
(5, 'Acte de vendre Appartement ain essman', '', '[{\"maitre\":\"Mr Hanafi\"},{\"bien 1\":\"bien 1\"},{\"mantant\":\"400000\"},{\"typePay\":\"cheque\"},{\"Vendeur\":\"11\"},{\"Achteur\":\"21\"}]', 'Wed Nov 11 2020', '', 4, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `bien_entity`
--

CREATE TABLE `bien_entity` (
  `id` int(11) NOT NULL,
  `libelle` text NOT NULL,
  `type` text NOT NULL,
  `description` text NOT NULL,
  `address` text NOT NULL,
  `ville` text NOT NULL,
  `Superficie` text NOT NULL,
  `nb_piece` int(11) NOT NULL,
  `etage` int(11) NOT NULL,
  `Immeuble` text NOT NULL,
  `terrainType` text NOT NULL,
  `ancfcc` text NOT NULL,
  `valeur` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `comparent_entity`
--

CREATE TABLE `comparent_entity` (
  `id` int(11) NOT NULL,
  `type` text NOT NULL,
  `nom` text NOT NULL,
  `dateAjout` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comparent_entity`
--

INSERT INTO `comparent_entity` (`id`, `type`, `nom`, `dateAjout`) VALUES
(10, 'PP', 'zakariae dinar', '2020-11-05'),
(11, 'PM', 'NewDEV Maroc', '2020-11-05'),
(12, 'PPM', 'karim dinar', '2020-11-05'),
(13, 'PP', 'karim', '2020-11-05'),
(14, 'PM', 'dfdf', '2020-11-05'),
(15, 'PM', 'IMPOSEER', '2020-11-11');

-- --------------------------------------------------------

--
-- Table structure for table `comparent_entity_actes_acte_entity`
--

CREATE TABLE `comparent_entity_actes_acte_entity` (
  `comparentEntityId` int(11) NOT NULL,
  `acteEntityId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dossier_entity`
--

CREATE TABLE `dossier_entity` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `nature` text NOT NULL,
  `libelle` text NOT NULL,
  `dateOuverture` date NOT NULL,
  `dateFermeture` date DEFAULT NULL,
  `NomMaitre` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dossier_entity`
--

INSERT INTO `dossier_entity` (`id`, `title`, `description`, `nature`, `libelle`, `dateOuverture`, `dateFermeture`, `NomMaitre`) VALUES
(1, 'Dossier 1', 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown', 'Bien Imobil', 'dossier 1', '2020-11-02', '2020-11-30', 'Maitre Hamid'),
(2, 'Dossier 2 - karim tadlaoui ', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque tempora aliquam nostrum accusamus placeat sequi, soluta architecto nam amet quasi enim non in facere officia corrupti necessitatibus, labore unde esse!\n', '', '', '2020-11-12', NULL, ''),
(3, 'Dossier 3 -  kahlid', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vitae, deserunt quasi possimus omnis iste officia ad quos perferendis veniam. Perspiciatis sequi labore reprehenderit velit quas expedita, tenetur porro sunt.', '', '', '2020-11-12', NULL, ''),
(4, 'dossier hamid  -  vendre imobilier', ' lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled', 'vendre imobilier', 'dossier hamid ', '2020-11-12', NULL, 'Mr Karim');

-- --------------------------------------------------------

--
-- Table structure for table `entreprise_com`
--

CREATE TABLE `entreprise_com` (
  `comparent` int(11) NOT NULL,
  `raisonSociale` text NOT NULL,
  `ice` text NOT NULL,
  `rc` text NOT NULL,
  `cnss` int(11) NOT NULL,
  `Adresse` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `entreprise_com`
--

INSERT INTO `entreprise_com` (`comparent`, `raisonSociale`, `ice`, `rc`, `cnss`, `Adresse`) VALUES
(11, 'NewDEV Maroc', '121323', '231234', 321132, 'Av chefchaouni n12'),
(15, 'IMPOSEER', '123223', '2323', 23232, 'SDSD');

-- --------------------------------------------------------

--
-- Table structure for table `mineur_entity`
--

CREATE TABLE `mineur_entity` (
  `comparent` int(11) NOT NULL,
  `nomFr` text NOT NULL,
  `nomAr` text NOT NULL,
  `prenomFr` text NOT NULL,
  `prenomAr` text NOT NULL,
  `nationalite` text NOT NULL,
  `nomPereFr` text NOT NULL,
  `nomPereAr` text NOT NULL,
  `nomMereFr` text NOT NULL,
  `nomMereAr` text NOT NULL,
  `dateNaissance` date NOT NULL,
  `typeIdentification` text NOT NULL,
  `Identification` text NOT NULL,
  `IdentificationValable` date NOT NULL,
  `tutelleComparent` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mineur_entity`
--

INSERT INTO `mineur_entity` (`comparent`, `nomFr`, `nomAr`, `prenomFr`, `prenomAr`, `nationalite`, `nomPereFr`, `nomPereAr`, `nomMereFr`, `nomMereAr`, `dateNaissance`, `typeIdentification`, `Identification`, `IdentificationValable`, `tutelleComparent`) VALUES
(1, 'dinar', '', 'harim', '', 'marocain', 'zakaria', '', 'karima', '', '2020-11-01', '', '', '2020-11-28', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `model_entity`
--

CREATE TABLE `model_entity` (
  `id` int(11) NOT NULL,
  `language` text NOT NULL,
  `redacteur` text NOT NULL,
  `libelle` text NOT NULL,
  `type` text NOT NULL,
  `champs` text NOT NULL,
  `boilerPlate` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `model_entity`
--

INSERT INTO `model_entity` (`id`, `language`, `redacteur`, `libelle`, `type`, `champs`, `boilerPlate`) VALUES
(4, 'FR', 'ZAKARIAE DINAR', 'ACTE VENDRE APPARTEMENT', 'BINE IMOB', '[{\"name\":\"maitre\",\"type\":\"text\",\"label\":\"Maitre\"},{\"name\":\"Vendeur\",\"type\":\"comparent\",\"label\":\"Vendeur\"},{\"name\":\"Achteur\",\"type\":\"comparent\",\"label\":\"Achteur\"},{\"name\":\"bien\",\"type\":\"bien\",\"label\":\"Le bien\"},{\"name\":\"mantant\",\"type\":\"number\",\"label\":\"Mantant\"},{\"name\":\"typePay\",\"type\":\"text\",\"label\":\"type De Payment\"}]', 'NOTHING'),
(5, 'Fr', 'dinar', 'Model Acte Vents Terrain', 'Vents Terrain', '[{\"name\":\"vendeur\",\"type\":\"comparent\",\"label\":\"vendeur\"},{\"name\":\"Acheteur\",\"type\":\"c\r\nomparent\",\"label\":\"Acheteur\"}]', ' '),
(6, 'Fr', 'DINAR ZAKARIAE', 'Model acte changement appartements', 'changement', '[{\"name\":\"Comp1\",\"type\":\"comparent\",\"label\":\"Comp 1\"},{\"name\":\"Comp2\",\"type\":\"comparent\",\"label\":\"Comp 2\"},{\"name\":\"Bien1\",\"type\":\"Bien\",\"label\":\"Bien 1\"},{\"name\":\"Bien2\",\"type\":\"Bien\",\"label\":\"Bien 2\"}]', ' '),
(7, 'Fr', 'DINAR ZAKARIAE', 'Model Location d\'un appartement', 'Location', '[{\"name\":\"Comp1\",\"type\":\"Comparent\",\"label\":\"Comp 1\"},{\"name\":\"Comp2\",\"type\":\"Comparent\",\"label\":\"Comp 2\"},{\"name\":\"Bien\",\"type\":\"Bien\",\"label\":\"Bien\"}]', ' ');

-- --------------------------------------------------------

--
-- Table structure for table `person_physiqiue_entity`
--

CREATE TABLE `person_physiqiue_entity` (
  `comparent` int(11) NOT NULL,
  `nomFr` text NOT NULL,
  `nomAr` text NOT NULL,
  `prenomFr` text NOT NULL,
  `prenomAr` text NOT NULL,
  `nationalite` text NOT NULL,
  `fonction` text NOT NULL,
  `nomPereFr` text NOT NULL,
  `nomPereAr` text NOT NULL,
  `nomMereFr` text NOT NULL,
  `nomMereAr` text NOT NULL,
  `situation` text NOT NULL,
  `dateNaissance` date NOT NULL,
  `nomCompanionFr` text NOT NULL,
  `nomCompanionAr` text NOT NULL,
  `typeIdentification` text NOT NULL,
  `Identification` text NOT NULL,
  `IdentificationValable` date NOT NULL,
  `entrepriseComparent` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `person_physiqiue_entity`
--

INSERT INTO `person_physiqiue_entity` (`comparent`, `nomFr`, `nomAr`, `prenomFr`, `prenomAr`, `nationalite`, `fonction`, `nomPereFr`, `nomPereAr`, `nomMereFr`, `nomMereAr`, `situation`, `dateNaissance`, `nomCompanionFr`, `nomCompanionAr`, `typeIdentification`, `Identification`, `IdentificationValable`, `entrepriseComparent`) VALUES
(10, 'zakaraiaae', 'زكرياء', 'dinar', 'زكرياء', 'marocain', 'none', 'zakariae', 'زكرياء', 'zakariae', 'زكرياء', 'celibataire', '2020-11-01', 'non', 'none', '', 'cd88248', '2020-11-28', NULL),
(13, 'dinar', 'dinar', 'dinar', 'dinar', 'dinar', 'dinar', 'dinar', 'dinar', 'dinar', 'dinar', 'celibataire', '2020-11-01', '', '', 'CIN', 'fd4334', '2020-11-28', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `acte_entity`
--
ALTER TABLE `acte_entity`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_01ed8af49fcefedf71a9451a4bc` (`modelId`),
  ADD KEY `FK_94c13b90d331ee078c471d860c5` (`dossierId`);

--
-- Indexes for table `bien_entity`
--
ALTER TABLE `bien_entity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comparent_entity`
--
ALTER TABLE `comparent_entity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comparent_entity_actes_acte_entity`
--
ALTER TABLE `comparent_entity_actes_acte_entity`
  ADD PRIMARY KEY (`comparentEntityId`,`acteEntityId`),
  ADD KEY `IDX_21c96d349a5cd74cdf05f78784` (`comparentEntityId`),
  ADD KEY `IDX_75d52e40b2537c954679e78fec` (`acteEntityId`);

--
-- Indexes for table `dossier_entity`
--
ALTER TABLE `dossier_entity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `entreprise_com`
--
ALTER TABLE `entreprise_com`
  ADD PRIMARY KEY (`comparent`);

--
-- Indexes for table `mineur_entity`
--
ALTER TABLE `mineur_entity`
  ADD PRIMARY KEY (`comparent`),
  ADD UNIQUE KEY `REL_e7b04457b37de22c088bfd571b` (`tutelleComparent`);

--
-- Indexes for table `model_entity`
--
ALTER TABLE `model_entity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `person_physiqiue_entity`
--
ALTER TABLE `person_physiqiue_entity`
  ADD PRIMARY KEY (`comparent`),
  ADD KEY `FK_86d00f4bd70416ee2a65fe7f91c` (`entrepriseComparent`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `acte_entity`
--
ALTER TABLE `acte_entity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `bien_entity`
--
ALTER TABLE `bien_entity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comparent_entity`
--
ALTER TABLE `comparent_entity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `dossier_entity`
--
ALTER TABLE `dossier_entity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `entreprise_com`
--
ALTER TABLE `entreprise_com`
  MODIFY `comparent` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `mineur_entity`
--
ALTER TABLE `mineur_entity`
  MODIFY `comparent` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `model_entity`
--
ALTER TABLE `model_entity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `person_physiqiue_entity`
--
ALTER TABLE `person_physiqiue_entity`
  MODIFY `comparent` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `acte_entity`
--
ALTER TABLE `acte_entity`
  ADD CONSTRAINT `FK_01ed8af49fcefedf71a9451a4bc` FOREIGN KEY (`modelId`) REFERENCES `model_entity` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_94c13b90d331ee078c471d860c5` FOREIGN KEY (`dossierId`) REFERENCES `dossier_entity` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `comparent_entity_actes_acte_entity`
--
ALTER TABLE `comparent_entity_actes_acte_entity`
  ADD CONSTRAINT `FK_21c96d349a5cd74cdf05f787841` FOREIGN KEY (`comparentEntityId`) REFERENCES `comparent_entity` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_75d52e40b2537c954679e78fecb` FOREIGN KEY (`acteEntityId`) REFERENCES `acte_entity` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `mineur_entity`
--
ALTER TABLE `mineur_entity`
  ADD CONSTRAINT `FK_e7b04457b37de22c088bfd571bb` FOREIGN KEY (`tutelleComparent`) REFERENCES `person_physiqiue_entity` (`comparent`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `person_physiqiue_entity`
--
ALTER TABLE `person_physiqiue_entity`
  ADD CONSTRAINT `FK_86d00f4bd70416ee2a65fe7f91c` FOREIGN KEY (`entrepriseComparent`) REFERENCES `entreprise_com` (`comparent`) ON DELETE NO ACTION ON UPDATE NO ACTION;

