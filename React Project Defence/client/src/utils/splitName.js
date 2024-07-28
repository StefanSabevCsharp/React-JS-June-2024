
export default function splitName(name) {
    return name.split("@")[0].charAt(0).toUpperCase() + name.split("@")[0].slice(1);
}