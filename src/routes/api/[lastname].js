import faker from "faker";

export async function get({ params }) {
  const  lastname  = params.lastname;
  console.log("fetching user "+lastname);
  console.log(params);
  return {
    body: {
      lastname,
      firstName: faker.name.firstName(),
      avatar: `https://avatars.dicebear.com/api/adventurer/${lastname}.svg`,
      title: faker.name.title(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
    },
  };
}