import Profile, {type Profiles} from "./Profile.tsx";
const profiles: Profiles = [
    {imgUrl: "./public/img/placeholder.png", name: "Mary", age: 42},
    {imgUrl: "./public/img/placeholder.png", name: "John", age: 35},
    {imgUrl: "./public/img/placeholder.png", name: "Mike", age: 28},
    {imgUrl: "./public/img/placeholder.png", name: "John", age: 17}
]

export default function ProfilePage() {
    return (
        <div className="profiles">
            {profiles.map((p, i) => (
                <Profile
                    key={i}
                    imgUrl={p.imgUrl}
                    name={p.name}
                    age={p.age}
                />
            ))}
        </div>
        )
}