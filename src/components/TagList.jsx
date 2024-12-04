export default function TagList({ tags }) {
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li className={`tag-${tag}`} key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
