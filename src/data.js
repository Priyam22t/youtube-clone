export const API_KEY = "AIzaSyBZtXVIbamVidy2ahWD0_ZD8C4rkcHTSWM";

export const value_converter = (value) => {
    if (!value) return "0";       // prevent undefined crash

    value = Number(value);

    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    } else {
        return value;
    }
};
