import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  RefreshControl,
  ScrollView,
} from "react-native";
import React from "react";
import { getRewardApi } from "../Api/backend";
import { getTicketsApi } from "../Api/backend";
import { getPlayerApi } from "../Api/backend";
import { getStatusApi } from "../Api/backend";

export default function Main(props) {
  const { navigation } = props;
  const [rewards, setRewards] = React.useState([]);
  const [tickets, setTickets] = React.useState([]);
  const [players, setPlayers] = React.useState([]);
  const [status, setStatus] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    getTickets();
    setRefreshing(false);
  };

  const goToRegister = (selectedNumber) => {
    navigation.navigate("Register", { selectedNumber: selectedNumber });
  };

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
  const getTickets = async () => {
    const response = await getTicketsApi();
    setTickets(response.tickets);
  };
  React.useEffect(() => {
    getTickets();
  }, []);

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
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.subcontainer}>
        {
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
        }
        {tickets.map((ticket, index) => (
          <View style={styles.numerosRifaContainer} key={index}>
            <View style={styles.idName}>
              <Text style={styles.numberList}>{ticket.id}: </Text>
              <Text style={styles.numberList}>
                {findPlayer(ticket.player_id)?.nombre}

                {findPlayer(ticket.player_id)?.apellido != "Disponible" &&
                  " " + findPlayer(ticket.player_id)?.apellido}
              </Text>
            </View>
            <View style={styles.statusBuy}>
              <Text style={styles.numberStatus}>
                {findStatus(ticket.status_id)}
              </Text>
              {ticket.status_id !== 1 ? (
                <Text>Vendido</Text>
              ) : (
                <Button
                  style={styles.numberList}
                  onPress={() => goToRegister(ticket.id)}
                  title="Comprar"
                />
              )}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: "center",
  },
  subcontainer: {
    maxWidth: 900,
    margin: 0,
    padding: 0,
    paddingBottom: 30,
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
    paddingBottom: 20,
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
