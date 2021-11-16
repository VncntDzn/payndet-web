import { MainLayout } from "src/layouts";
import { LinkedInIcon, UserIcon, WebIcon } from "src/icons";

const DATA = [
  {
    icon: <LinkedInIcon />,
    name: "Github Profile",
    link: "https://github.com/VncntDzn",
  },
  {
    icon: <UserIcon />,
    name: "LinkedIn Profile",
    link: "https://www.linkedin.com/in/vincent-dizon-34831817b/",
  },
  {
    icon: <WebIcon />,
    name: "Personal Website",
    link: "https://vpdizon.vercel.app/",
  },
];
const Profile = () => {
  return (
    <MainLayout>
      <div className="mt-12 flex flex-col justify-center items-center h-90vh">
        <h1 className="text-4xl my-5">Vincent Dizon Accounts</h1>
        {DATA.map(({ icon, name, link }) => (
          <a href={link} className="flex items-center w-96" key={name}>
            {icon} <p className="text-2xl">{name}</p>
          </a>
        ))}
      </div>
    </MainLayout>
  );
};

export default Profile;
