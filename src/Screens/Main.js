import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  RefreshControl,
} from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import premios from "../Assets/premiosList";
import { getRewardApi } from "../Api/backend";
import { getTicketsApi } from "../Api/backend";
import { getPlayerApi } from "../Api/backend";
import { getStatusApi } from "../Api/backend";

export default function Main(props) {
  const { navigation } = props;
  const [numberCharged, setNumberCharged] = React.useState(20);
  const [isVisible, setIsVisible] = React.useState(true);
  const [rewards, setRewards] = React.useState([]);
  const [tickets, setTickets] = React.useState([]);
  const [players, setPlayers] = React.useState([]);
  const [status, setStatus] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setRefreshing(false);
  }, []);

  const goToRegister = (selectedNumber) => {
    navigation.navigate("Register", { selectedNumber: selectedNumber });
  };

  const handleScroll = (event) => {
    if (event.nativeEvent.contentOffset.y > 50) {
      // ajusta este valor según tus necesidades
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const numeros = [
    { id: 1, comprador: null, status: null },
    { id: 2, comprador: null, status: null },
    { id: 3, comprador: null, status: "A9" },
    { id: 4, comprador: "Rhetta", status: null },
    { id: 5, comprador: "Lawton", status: null },
    { id: 6, comprador: null, status: "SRW" },
    { id: 7, comprador: "Marji", status: null },
    { id: 8, comprador: "Padraig", status: null },
    { id: 9, comprador: "Buiron", status: null },
    { id: 10, comprador: "Cletis", status: null },
    { id: 11, comprador: "Clarance", status: null },
    { id: 12, comprador: "Gwenora", status: "UT" },
    { id: 13, comprador: "Reggi", status: null },
    { id: 14, comprador: "Brnaba", status: null },
    { id: 15, comprador: null, status: null },
    { id: 16, comprador: "Bastian", status: "BD" },
    { id: 17, comprador: "Aluin", status: null },
    { id: 18, comprador: null, status: null },
    { id: 19, comprador: "Madlen", status: null },
    { id: 20, comprador: "Torrey", status: null },
    { id: 21, comprador: "Lyn", status: null },
    { id: 22, comprador: "Roarke", status: null },
    { id: 23, comprador: "Averil", status: "C" },
    { id: 24, comprador: "Cecile", status: null },
    { id: 25, comprador: "Stefa", status: null },
    { id: 26, comprador: null, status: null },
    { id: 27, comprador: "Gussie", status: null },
    { id: 28, comprador: null, status: null },
    { id: 29, comprador: "Brandy", status: "WV" },
    { id: 30, comprador: null, status: null },
    { id: 31, comprador: "Innis", status: null },
    { id: 32, comprador: "Lizzie", status: null },
    { id: 33, comprador: "Blakelee", status: null },
    { id: 34, comprador: "Annabela", status: null },
    { id: 35, comprador: "Ellene", status: "02" },
    { id: 36, comprador: "Barbaraanne", status: null },
    { id: 37, comprador: "Nathanil", status: null },
    { id: 38, comprador: "Philipa", status: null },
    { id: 39, comprador: "Melvyn", status: null },
    { id: 40, comprador: "Clementia", status: null },
    { id: 41, comprador: "Remington", status: "M" },
    { id: 42, comprador: "Jane", status: null },
    { id: 43, comprador: "Clarine", status: null },
    { id: 44, comprador: "Codie", status: null },
    { id: 45, comprador: "Isidoro", status: null },
    { id: 46, comprador: "Ernaline", status: "B8" },
    { id: 47, comprador: "Jeremie", status: null },
    { id: 48, comprador: "Nessie", status: "LZ" },
    { id: 49, comprador: "Howey", status: null },
    { id: 50, comprador: null, status: null },
    { id: 51, comprador: "Bernete", status: "B4" },
    { id: 52, comprador: "Merrily", status: "MD" },
    { id: 53, comprador: "Constancy", status: null },
    { id: 54, comprador: "Sidonnie", status: null },
    { id: 55, comprador: "Cletus", status: null },
    { id: 56, comprador: null, status: null },
    { id: 57, comprador: "Grantley", status: "A1" },
    { id: 58, comprador: "Ric", status: "OH" },
    { id: 59, comprador: null, status: null },
    { id: 60, comprador: "Cloe", status: null },
    { id: 61, comprador: null, status: "ENG" },
    { id: 62, comprador: null, status: null },
    { id: 63, comprador: "Letta", status: "16" },
    { id: 64, comprador: "Selena", status: null },
    { id: 65, comprador: "Jessamine", status: null },
    { id: 66, comprador: "Bryon", status: "17" },
    { id: 67, comprador: "Delainey", status: null },
    { id: 68, comprador: "Doroteya", status: null },
    { id: 69, comprador: "Madelon", status: null },
    { id: 70, comprador: null, status: null },
    { id: 71, comprador: "Norby", status: null },
    { id: 72, comprador: null, status: null },
    { id: 73, comprador: null, status: null },
    { id: 74, comprador: "Karola", status: "SK" },
    { id: 75, comprador: null, status: "MIC" },
    { id: 76, comprador: "Reeba", status: "03" },
    { id: 77, comprador: "Elise", status: "VA" },
    { id: 78, comprador: null, status: null },
    { id: 79, comprador: null, status: null },
    { id: 80, comprador: "Adolph", status: null },
    { id: 81, comprador: "Angy", status: null },
    { id: 82, comprador: "Marcy", status: null },
    { id: 83, comprador: "Whitman", status: "03" },
    { id: 84, comprador: "Waldo", status: null },
    { id: 85, comprador: "Pincus", status: "SK" },
    { id: 86, comprador: "Doris", status: null },
    { id: 87, comprador: "Emmet", status: null },
    { id: 88, comprador: "Moise", status: null },
    { id: 89, comprador: "Packston", status: "KY" },
    { id: 90, comprador: null, status: null },
    { id: 91, comprador: "Jania", status: null },
    { id: 92, comprador: "Estele", status: null },
    { id: 93, comprador: "Frants", status: "BL" },
    { id: 94, comprador: "Corrinne", status: null },
    { id: 95, comprador: "Jephthah", status: "A8" },
    { id: 96, comprador: null, status: null },
    { id: 97, comprador: "Gabey", status: null },
    { id: 98, comprador: "Anjanette", status: null },
    { id: 99, comprador: "Clay", status: null },
    { id: 100, comprador: "Rudolph", status: null },
    { id: 101, comprador: null, status: null },
    { id: 102, comprador: null, status: null },
    { id: 103, comprador: "Kimball", status: null },
    { id: 104, comprador: null, status: null },
    { id: 105, comprador: "Eldin", status: null },
    { id: 106, comprador: "Sybilla", status: null },
    { id: 107, comprador: "Karee", status: null },
    { id: 108, comprador: "Gusella", status: null },
    { id: 109, comprador: "Margery", status: null },
    { id: 110, comprador: null, status: null },
    { id: 111, comprador: "Charissa", status: "M" },
    { id: 112, comprador: "Farra", status: null },
    { id: 113, comprador: null, status: null },
    { id: 114, comprador: "Candy", status: null },
    { id: 115, comprador: "Noel", status: null },
    { id: 116, comprador: "Niels", status: null },
    { id: 117, comprador: null, status: null },
    { id: 118, comprador: "Stirling", status: null },
    { id: 119, comprador: "Zonnya", status: "O" },
    { id: 120, comprador: "Hyacinthe", status: null },
    { id: 121, comprador: null, status: "B4" },
    { id: 122, comprador: "Arden", status: "03" },
    { id: 123, comprador: null, status: null },
    { id: 124, comprador: "Sid", status: null },
    { id: 125, comprador: "Florence", status: null },
    { id: 126, comprador: "Guy", status: null },
    { id: 127, comprador: "Patty", status: null },
    { id: 128, comprador: "Grover", status: null },
    { id: 129, comprador: "Osmund", status: null },
    { id: 130, comprador: null, status: "05" },
    { id: 131, comprador: null, status: null },
    { id: 132, comprador: "Franzen", status: null },
    { id: 133, comprador: "Bentley", status: "14" },
    { id: 134, comprador: null, status: null },
    { id: 135, comprador: "Byrann", status: null },
    { id: 136, comprador: null, status: null },
    { id: 137, comprador: "Erie", status: null },
    { id: 138, comprador: "Tull", status: null },
    { id: 139, comprador: "Chancey", status: "AC" },
    { id: 140, comprador: "Ware", status: null },
    { id: 141, comprador: null, status: null },
    { id: 142, comprador: "Gabriella", status: null },
    { id: 143, comprador: null, status: null },
    { id: 144, comprador: "Brockie", status: null },
    { id: 145, comprador: "Aurlie", status: null },
    { id: 146, comprador: "Allyson", status: null },
    { id: 147, comprador: "Aldin", status: null },
    { id: 148, comprador: null, status: null },
    { id: 149, comprador: null, status: null },
    { id: 150, comprador: "Valina", status: null },
    { id: 151, comprador: "Tiffie", status: "OH" },
    { id: 152, comprador: "Cecilla", status: null },
    { id: 153, comprador: "Drusy", status: null },
    { id: 154, comprador: null, status: "17" },
    { id: 155, comprador: null, status: null },
    { id: 156, comprador: "Kylie", status: null },
    { id: 157, comprador: "Livvy", status: "GA" },
    { id: 158, comprador: "Hazlett", status: null },
    { id: 159, comprador: null, status: null },
    { id: 160, comprador: "Taite", status: null },
    { id: 161, comprador: "Meggi", status: null },
    { id: 162, comprador: "Delores", status: null },
    { id: 163, comprador: "Alfredo", status: null },
    { id: 164, comprador: null, status: null },
    { id: 165, comprador: null, status: null },
    { id: 166, comprador: "Modestine", status: null },
    { id: 167, comprador: "Nomi", status: null },
    { id: 168, comprador: null, status: "07" },
    { id: 169, comprador: null, status: null },
    { id: 170, comprador: "Goldarina", status: null },
    { id: 171, comprador: "Cloe", status: null },
    { id: 172, comprador: null, status: null },
    { id: 173, comprador: "Elvina", status: "1084" },
    { id: 174, comprador: "Cesar", status: null },
    { id: 175, comprador: "Ernesta", status: null },
    { id: 176, comprador: "Selinda", status: null },
    { id: 177, comprador: "Witty", status: null },
    { id: 178, comprador: "Joseph", status: null },
    { id: 179, comprador: "Jacquetta", status: "17" },
    { id: 180, comprador: "Claudie", status: null },
    { id: 181, comprador: "Barb", status: "16" },
    { id: 182, comprador: "Syman", status: null },
    { id: 183, comprador: "Alan", status: null },
    { id: 184, comprador: "Dulci", status: null },
    { id: 185, comprador: "Rayner", status: null },
    { id: 186, comprador: "Lutero", status: null },
    { id: 187, comprador: "Conway", status: null },
    { id: 188, comprador: null, status: null },
    { id: 189, comprador: "Carley", status: "A8" },
    { id: 190, comprador: "Nanny", status: null },
    { id: 191, comprador: null, status: null },
    { id: 192, comprador: "Berty", status: null },
    { id: 193, comprador: null, status: null },
    { id: 194, comprador: null, status: "14" },
    { id: 195, comprador: "Angelo", status: null },
    { id: 196, comprador: "Carmelia", status: null },
    { id: 197, comprador: "Petunia", status: null },
    { id: 198, comprador: "Lombard", status: null },
    { id: 199, comprador: null, status: null },
    { id: 200, comprador: "Ginger", status: null },
    { id: 201, comprador: "Risa", status: "CA" },
    { id: 202, comprador: "Shayla", status: null },
    { id: 203, comprador: null, status: null },
    { id: 204, comprador: null, status: "AB" },
    { id: 205, comprador: "Isis", status: null },
    { id: 206, comprador: "Blondie", status: null },
    { id: 207, comprador: "Ben", status: "15" },
    { id: 208, comprador: "Durant", status: "BC" },
    { id: 209, comprador: "Uta", status: null },
    { id: 210, comprador: "Faith", status: null },
    { id: 211, comprador: "Elfrieda", status: null },
    { id: 212, comprador: "Cheston", status: null },
    { id: 213, comprador: "Leilah", status: null },
    { id: 214, comprador: "Gweneth", status: null },
    { id: 215, comprador: "Lynette", status: null },
    { id: 216, comprador: "Eugenio", status: null },
    { id: 217, comprador: null, status: null },
    { id: 218, comprador: null, status: null },
    { id: 219, comprador: null, status: null },
    { id: 220, comprador: "Jillana", status: null },
    { id: 221, comprador: "Orelia", status: null },
    { id: 222, comprador: "Pennie", status: null },
    { id: 223, comprador: "Brunhilda", status: "DUR" },
    { id: 224, comprador: "Cristie", status: null },
    { id: 225, comprador: null, status: null },
    { id: 226, comprador: null, status: "AB" },
    { id: 227, comprador: null, status: "97" },
    { id: 228, comprador: "Ondrea", status: null },
    { id: 229, comprador: null, status: "O" },
    { id: 230, comprador: "Shalna", status: null },
    { id: 231, comprador: null, status: null },
    { id: 232, comprador: null, status: null },
    { id: 233, comprador: null, status: "SGR" },
    { id: 234, comprador: "Frankie", status: null },
    { id: 235, comprador: "Danell", status: null },
    { id: 236, comprador: "Brear", status: null },
    { id: 237, comprador: "Malcolm", status: null },
    { id: 238, comprador: null, status: null },
    { id: 239, comprador: "Kalindi", status: null },
    { id: 240, comprador: "Sidnee", status: null },
    { id: 241, comprador: "Gerianne", status: null },
    { id: 242, comprador: "Carlota", status: null },
    { id: 243, comprador: "Natasha", status: null },
    { id: 244, comprador: "Mendy", status: null },
    { id: 245, comprador: "Mary", status: null },
    { id: 246, comprador: "Vida", status: null },
    { id: 247, comprador: "Caryl", status: "C" },
    { id: 248, comprador: "Kassey", status: null },
    { id: 249, comprador: "Addi", status: null },
    { id: 250, comprador: "Maryellen", status: null },
    { id: 251, comprador: null, status: null },
    { id: 252, comprador: "Burg", status: "MC" },
    { id: 253, comprador: null, status: null },
    { id: 254, comprador: "Elnar", status: "N" },
    { id: 255, comprador: "Mordy", status: null },
    { id: 256, comprador: "Poppy", status: null },
    { id: 257, comprador: "Lazarus", status: "AB" },
    { id: 258, comprador: "Dallis", status: null },
    { id: 259, comprador: null, status: null },
    { id: 260, comprador: "Zarah", status: null },
    { id: 261, comprador: "Kenyon", status: null },
    { id: 262, comprador: "Nesta", status: null },
    { id: 263, comprador: "Beatrisa", status: null },
    { id: 264, comprador: "Bellina", status: "03" },
    { id: 265, comprador: "Nanette", status: null },
    { id: 266, comprador: null, status: null },
    { id: 267, comprador: "Gilli", status: null },
    { id: 268, comprador: "Pandora", status: null },
    { id: 269, comprador: "Zorine", status: null },
    { id: 270, comprador: "Kathlin", status: null },
    { id: 271, comprador: null, status: "17" },
    { id: 272, comprador: "Linus", status: null },
    { id: 273, comprador: null, status: null },
    { id: 274, comprador: "Natalya", status: "A6" },
    { id: 275, comprador: "Lionello", status: null },
    { id: 276, comprador: "Charis", status: null },
    { id: 277, comprador: null, status: null },
    { id: 278, comprador: "Modesta", status: "ON" },
    { id: 279, comprador: "Dorisa", status: null },
    { id: 280, comprador: null, status: null },
    { id: 281, comprador: "Jason", status: null },
    { id: 282, comprador: null, status: null },
    { id: 283, comprador: "Zabrina", status: "TN" },
    { id: 284, comprador: null, status: null },
    { id: 285, comprador: "Gaspard", status: null },
    { id: 286, comprador: "Sydelle", status: null },
    { id: 287, comprador: "Rochester", status: null },
    { id: 288, comprador: "Wadsworth", status: null },
    { id: 289, comprador: "Madelyn", status: null },
    { id: 290, comprador: "Virginie", status: null },
    { id: 291, comprador: "Adina", status: null },
    { id: 292, comprador: "Sully", status: null },
    { id: 293, comprador: "Rowe", status: null },
    { id: 294, comprador: "Marcelia", status: null },
    { id: 295, comprador: "Kenny", status: null },
    { id: 296, comprador: null, status: null },
    { id: 297, comprador: "Durward", status: null },
    { id: 298, comprador: "Kalli", status: null },
    { id: 299, comprador: "Lanni", status: null },
    { id: 300, comprador: "Galvin", status: "E" },
    { id: 301, comprador: "Lynn", status: null },
    { id: 302, comprador: "Wynny", status: null },
    { id: 303, comprador: "Patrice", status: null },
    { id: 304, comprador: "Tate", status: null },
    { id: 305, comprador: "Susi", status: null },
    { id: 306, comprador: null, status: null },
    { id: 307, comprador: null, status: null },
    { id: 308, comprador: "Tomas", status: null },
    { id: 309, comprador: "Gaile", status: null },
    { id: 310, comprador: "Ulrick", status: null },
    { id: 311, comprador: "Abbe", status: null },
    { id: 312, comprador: "Xever", status: null },
    { id: 313, comprador: null, status: null },
    { id: 314, comprador: "Goddart", status: null },
    { id: 315, comprador: "Devonna", status: null },
    { id: 316, comprador: "Aimil", status: null },
    { id: 317, comprador: "Adan", status: null },
    { id: 318, comprador: "Heloise", status: null },
    { id: 319, comprador: "Rozamond", status: null },
    { id: 320, comprador: "Zebulon", status: null },
    { id: 321, comprador: "Thedric", status: null },
    { id: 322, comprador: "Christoffer", status: null },
    { id: 323, comprador: null, status: null },
    { id: 324, comprador: "Hillie", status: null },
    { id: 325, comprador: "Arlena", status: null },
    { id: 326, comprador: "Justina", status: "B8" },
    { id: 327, comprador: "Gerome", status: null },
    { id: 328, comprador: "Buddy", status: null },
    { id: 329, comprador: "Genni", status: null },
    { id: 330, comprador: "Tabbatha", status: null },
    { id: 331, comprador: "Theadora", status: "06" },
    { id: 332, comprador: "Cris", status: null },
    { id: 333, comprador: "Beitris", status: null },
    { id: 334, comprador: "Tabbitha", status: null },
    { id: 335, comprador: "Donny", status: null },
    { id: 336, comprador: "Vivi", status: null },
    { id: 337, comprador: null, status: null },
    { id: 338, comprador: null, status: null },
    { id: 339, comprador: null, status: null },
    { id: 340, comprador: null, status: null },
    { id: 341, comprador: "Gwenora", status: null },
    { id: 342, comprador: "Hanan", status: null },
    { id: 343, comprador: null, status: "13" },
    { id: 344, comprador: "Aldin", status: null },
    { id: 345, comprador: "Waldemar", status: null },
    { id: 346, comprador: "Rebekah", status: null },
    { id: 347, comprador: "Rona", status: null },
    { id: 348, comprador: "Torey", status: null },
    { id: 349, comprador: "Cindelyn", status: null },
    { id: 350, comprador: "Gwendolin", status: null },
    { id: 351, comprador: "Inger", status: null },
    { id: 352, comprador: "Quinlan", status: "LA" },
    { id: 353, comprador: null, status: null },
    { id: 354, comprador: "Pincus", status: "B6" },
    { id: 355, comprador: "Vickie", status: null },
    { id: 356, comprador: "Humfrey", status: null },
    { id: 357, comprador: "Cal", status: null },
    { id: 358, comprador: "Cecilia", status: null },
    { id: 359, comprador: "Hadlee", status: "CA" },
    { id: 360, comprador: "Kiri", status: null },
    { id: 361, comprador: "Kellby", status: "QC" },
    { id: 362, comprador: "Warde", status: null },
    { id: 363, comprador: "Mozes", status: null },
    { id: 364, comprador: "Wynn", status: "O" },
    { id: 365, comprador: "Eleanor", status: "03" },
    { id: 366, comprador: "Enrichetta", status: null },
    { id: 367, comprador: "Costanza", status: null },
    { id: 368, comprador: "Kat", status: "03" },
    { id: 369, comprador: "Starlin", status: null },
    { id: 370, comprador: "Karylin", status: null },
    { id: 371, comprador: "Jerri", status: null },
    { id: 372, comprador: "Dan", status: null },
    { id: 373, comprador: "Alphonse", status: null },
    { id: 374, comprador: null, status: null },
    { id: 375, comprador: "Colene", status: null },
    { id: 376, comprador: "Nancee", status: null },
    { id: 377, comprador: "Barb", status: "A1" },
    { id: 378, comprador: "Gaby", status: null },
    { id: 379, comprador: null, status: null },
    { id: 380, comprador: "Jarret", status: "MOR" },
    { id: 381, comprador: null, status: null },
    { id: 382, comprador: "Joice", status: null },
    { id: 383, comprador: "Claudian", status: "TX" },
    { id: 384, comprador: null, status: null },
    { id: 385, comprador: "Elwin", status: null },
    { id: 386, comprador: null, status: "O" },
    { id: 387, comprador: "Chiquita", status: null },
    { id: 388, comprador: null, status: null },
    { id: 389, comprador: "Dael", status: null },
    { id: 390, comprador: "Ethelyn", status: null },
    { id: 391, comprador: "Ferdie", status: "MI" },
    { id: 392, comprador: "Laura", status: "PV" },
    { id: 393, comprador: "Sky", status: null },
    { id: 394, comprador: null, status: "AB" },
    { id: 395, comprador: "Winthrop", status: null },
    { id: 396, comprador: null, status: null },
    { id: 397, comprador: "Margaretta", status: null },
    { id: 398, comprador: "Heinrik", status: null },
    { id: 399, comprador: "Jennifer", status: null },
    { id: 400, comprador: "Evvie", status: "01" },
  ];

  const data = numeros.slice(0, numberCharged);

  const isDisponible = (status) => {
    if (status === null) {
      return "Disponible";
    }
    return status;
  };

  const goToPremios = () => {
    navigation.navigate("Premios");
  };

  const goToTyc = () => {
    navigation.navigate("Tyc");
  };

  // getReward
  React.useEffect(() => {
    const getReward = async () => {
      const response = await getRewardApi();
      // const responseDecoded =response.json()
      setRewards(response.rewards);
    };

    getReward();
  }, []);

  // getTickets
  React.useEffect(() => {
    const getTickets = async () => {
      const response = await getTicketsApi();
      setTickets(response.tickets);
    };
    getTickets();
  }, [refreshing]);

  // GetPlayer
  React.useEffect(() => {
    const getPlayer = async () => {
      const response = await getPlayerApi();
      setPlayers(response.player);
    };
    getPlayer();
  }, []);

  // GetStatus
  React.useEffect(() => {
    const getStatus = async () => {
      const response = await getStatusApi();
      setStatus(response.statuses);
    };
    getStatus();
  }, []);

  const findPlayer = (id) => {
    const player = players.find((player) => player.id === id);
    if (player) {
      return player;
    }
    return null;
  };

  const findStatus = (id) => {
    const statuses = status?.find((item) => item.id == id);
    if (statuses) {
      return statuses.status;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        {isVisible && (
          <View style={styles.subcontainer}>
            <Text style={styles.title}>¡Gran Rifa!</Text>
            <Text style={styles.subtitle}>
              Participa en nuestra rifa y gana alguno de los siguentes premios
            </Text>
            <Text style={styles.bold}>Costo del Número: $200.00</Text>
            {rewards &&
              rewards.map((premio, index) => (
                <Pressable
                  onPress={goToPremios}
                  style={styles.premiosContainer}
                  key={index}
                >
                  <Text style={styles.bold}>{premio.id} lugar: </Text>
                  <Text>{premio.nombre}</Text>
                </Pressable>
              ))}
            <Pressable onPress={goToTyc}>
              <Text style={styles.tyc}>Ver Reglas del sorteo</Text>
            </Pressable>
            <Text style={styles.subtitle}>Numeros Disponibles</Text>
          </View>
        )}
        <FlatList
          data={tickets}
          onScroll={handleScroll}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onEndReached={() => {
            setNumberCharged(numberCharged + 20);
          }}
          onEndReachedThreshold={0.5}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.numerosRifaContainer}>
              <View style={styles.idName}>
                <Text style={styles.numberList}>{item.id}: </Text>
                <Text style={styles.numberList}>
                  {isDisponible(findPlayer(item.player_id)?.nombre)}
                </Text>
              </View>
              <View style={styles.statusBuy}>
                <Text style={styles.numberStatus}>
                  {findStatus(item.status_id)}
                </Text>
                {item.status_id !== 1 ? (
                  <Text>Vendido</Text>
                ) : (
                  <Button
                    style={styles.numberList}
                    onPress={() => goToRegister(item.id)}
                    title="Comprar"
                  />
                )}
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  subcontainer: {
    maxWidth: 900,
    margin: 0,
    padding: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
  premiosContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  numerosRifaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  numberList: {
    margin: 5,
    textAlign: "left",
  },
  numberStatus: {
    margin: 5,
    textAlign: "center",
    width: 100,
    textAlign: "left",
  },
  idName: {
    flexDirection: "row",
  },
  statusBuy: {
    flexDirection: "row",
  },
  bold: {
    fontWeight: "bold",
  },
  tyc: {
    margin: 10,
    color: "lightgray",
  },
});
