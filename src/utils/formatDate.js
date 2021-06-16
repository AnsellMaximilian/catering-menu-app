function formatDate(date) {
    const month = date.toLocaleString('default', {month: 'long'});
    const year = date.getFullYear();
    const day = date.getDate();

    return `${day} ${month}, ${year}`
}

export default formatDate;