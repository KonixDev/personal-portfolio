import Image from "next/image";
import React from "react";

const UserCard = () => {
  return (
    <div className="flex items-start gap-4 pb-10">
      <div className="lg:flex-shrink-0 md:flex-shrink-0 sm:flex">
        <Image
          src="/full.jpg"
          width={300} // Puedes ajustar el tamaño de la imagen aquí
          height={300} // Asegúrate de mantener la relación de aspecto
          alt="Picture of the author"
          className="rounded-xl hover:shadow-xl transition duration-200 ease-in-out cursor-pointer"
        />
      </div>
      <div>
        <h3 className="text-lg font-medium">Martín Coll</h3>
        <p className="mt-0.5 italic text-black/60 dark:text-white/60">
          How many programmers does it take to change a light bulb? None, that’s
          a hardware problem. 🐸
        </p>
      </div>
    </div>
  );
};

export default UserCard;
