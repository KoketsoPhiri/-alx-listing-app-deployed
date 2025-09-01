import Image from "next/image";
import { Property} from "@/interfaces";

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Use the dynamic image URL from the property prop */}
        <Image
          src={property.imageUrl}
          alt={property.title}
          width={800}
          height={600}
          layout="responsive"
          objectFit="cover"
        />
        <div className="p-6">
          {/* Display dynamic data */}
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <p className="text-gray-600 text-xl mb-4">{property.location}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-4">
            ${property.price}
          </p>
          <div className="border-t pt-4">
            <h2 className="text-xl font-bold mb-2">Description</h2>
            <p className="text-gray-700">{property.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;