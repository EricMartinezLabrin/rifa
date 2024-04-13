export const URL = "https://apirifa.fadetechs.com";

export const getRewardApi = async () => {
  try {
    const response = await fetch(`${URL}/api/reward`);
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTicketsApi = async () => {
  try {
    const response = await fetch(`${URL}/api/tickets`);
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPlayerApi = async () => {
  try {
    const response = await fetch(`${URL}/api/player`);
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getStatusApi = async () => {
  try {
    const response = await fetch(`${URL}/api/status`);
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPictureApi = async (rewardId) => {
  try {
    const response = await fetch(`${URL}/api/picture/${rewardId}`);
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTycApi = async () => {
  try {
    const response = await fetch(`${URL}/api/tyc`);
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createPlayerApi = async (player) => {
  try {
    const response = await fetch(`${URL}/api/createPlayer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const TicketByIdApi = async (ticketId) => {
  try {
    const response = await fetch(`${URL}/api/ticket/${ticketId}`);
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const UpdateTicketApi = async (ticketId, statusId, playerId) => {
  console.log(statusId);
  try {
    const response = await fetch(`${URL}/api/UpdateTicketApi/${ticketId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ statusId: statusId, playerId: playerId }),
    });
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
