setInterval(() => {
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  let Hrot = hours * 30 + minutes / 2;
  let Mrot = minutes * 6;
  let Srot = seconds * 6;
  hour.style.transform = `rotate(${Hrot}deg)`;
  minute.style.transform = `rotate(${Mrot}deg)`;
  second.style.transform = `rotate(${Srot}deg)`;
}, 1000);
