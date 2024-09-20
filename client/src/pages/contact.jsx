import React from "react";

const Contact = () => {
  const contacts = [
    {
      name: "Swapnil Saha",
      email: "swapnil.saha@g.bracu.ac.bd",
      id: "21301217",
      image: "https://i.pinimg.com/236x/69/40/7f/69407fe3a7697fa29e1b3b6e96ca22de.jpg",
    },
    {
      name: "SM Sazidur Rahman",
      email: "sm.sazidur.rahman@g.bracu.ac.bd",
      id: "21201232",
      image: "https://i.pinimg.com/474x/94/cb/68/94cb68baea50bb98cdab65b74e731c1c.jpg",
    },
    {
      name: "RAHNUMA RUED",
      email: "rahnuma.rued@g.bracu.ac.bd",
      id: "21301264",
      image: "https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-2.jpg",
    },
    {
      name: "MD. ISTIAK HOSSAIN",
      email: "md.istiak.hossain@g.bracu.ac.bd",
      id: "24341194",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl text-center font-bold mb-10">Contact Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
          >
            <img
              src={contact.image}
              alt={contact.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2 text-center">{contact.name}</h2>
            <p className="text-lg mb-1 text-center">
              <strong>Email: </strong>
              <a
                href={`mailto:${contact.email}`}
                className="text-blue-500 hover:underline"
              >
                {contact.email}
              </a>
            </p>
            <p className="text-lg mb-1 text-center">
              <strong>ID: </strong>
              {contact.id}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
