const fetchHomeInfo = async (id) => {
  try {
    const response = await fetch(
      `https://bittiye.cloud.uxqode.co/items/pages/${id}?fields=*,*.*.*.*.*.*.*`
    );

    const data = await response.json();
    return data.data.blocks;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default fetchHomeInfo;
