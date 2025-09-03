import Image from "next/image";
import { PropertyCardProps } from "@/interfaces";


const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image
  src={property.imageUrl || "/placeholder-card.png"}
  alt={property.title || "Property"}
        width={500}
        height={300}
        objectFit="cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <p className="text-gray-600">{property.location}</p>
        <p className="mt-2 text-lg font-bold text-blue-600">
          ${property.price}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;