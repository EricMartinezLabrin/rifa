export const URL = "http://192.168.100.7:8000";

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
