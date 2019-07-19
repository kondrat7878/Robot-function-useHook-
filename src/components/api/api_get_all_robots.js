// const data_url = "https://api.myjson.com/bins/wzf3c";
export  default  async function Get_all_robots() {
    try {
        const response = await fetch("https://api.myjson.com/bins/wzf3c");
        if (!response.ok) throw new Error("Network response was not ok.");
        return await response.json();
    } catch (error) {
        console.error(`fetch operation failed: ${error.message}`);
    }
};
