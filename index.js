const jack_image_list = ["IMG_2247.jpg", "IMG_1572.jpg", "IMG_9390.jpg"]
const jack_image = jack_image_list[Math.floor(Math.random() * jack_image_list.length)]

document.onload()
document.getElementById("jack-img").src = jack_image