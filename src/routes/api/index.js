import faker from "faker";

const generateUsers = (style) => {
  console.log(`generateUsers(${style});`)
  if (style === undefined || style === null || style ==="")  {
    style="open-peeps";
  }
  console.log("generate users with ["+style+"]")
  return [...Array(50)].map(() => {
  
    const lastName = faker.name.lastName();
    return {
      avatar: `https://avatars.dicebear.com/api/${style}/${lastName}.svg?mood=happy`,
      lastName,
    };
  })
};

export async function get({query}) {
  console.log("get()");
  console.log(query)
  console.log(query.get("style"));
  return {
    body: generateUsers(query.get("style"))
  };
}