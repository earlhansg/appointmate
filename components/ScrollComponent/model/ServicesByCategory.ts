export type Service = {
  id: number;
  serviceName: string;
  caption: string;
  price: number;
};

export type ServicesByCategory = {
  id: number;
  categoryName: string;
  caption: string;
  services: Service[];
};
