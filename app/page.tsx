"use client"
import Image from 'next/image'
import ImageMapper from 'react-img-mapper'

export default function Home() {

  const athensMap = {
    name: "my-map",
    areas: [
      { id: "Plato", shape: "circle", coords: [1817, 1316, 70], href: "https://www.google.com" },
      { id: "Aristotle", shape: "circle", coords: [1963, 1311, 70], href: "https://www.google.com" },
      { id: "Anaximander", shape: "circle", coords: [765, 1926, 70], href: "https://www.google.com" },
      { id: "Socrates", shape: "circle", coords: [1324, 1307, 70], href: "https://www.google.com" },
      { id: "Diogenes", shape: "circle", coords: [2146, 1738, 70], href: "https://www.google.com" },
      { id: "Heraclitus", shape: "circle", coords: [1648, 1870, 70], href: "https://www.google.com" },
      { id: "Epicurus", shape: "circle", coords: [573, 1611, 70], href: "https://www.google.com" },
      { id: "Euclid", shape: "circle", coords: [2997, 1920, 70], href: "https://www.google.com" },
      { id: "Ptolemy", shape: "circle", coords: [3321, 1620, 70], href: "https://www.google.com" },
      { id: "Pythagoras", shape: "circle", coords: [948, 1846, 70], href: "https://www.google.com" },
      { id: "Zoroaster", shape: "circle", coords: [3245, 1593, 70], href: "https://www.google.com" },
    ]
  };
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <p>Hover over a philosopher's face to talk to them!</p>
      <ImageMapper src={'/athens_school.jpg'} map={athensMap} responsive={true} natural={true} parentWidth={700} />
    </div>
  )
}