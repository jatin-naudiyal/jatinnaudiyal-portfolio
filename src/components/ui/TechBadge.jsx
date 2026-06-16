export default function TechBadge({ children, variant = 'primary' }) {
  const variantClass =
    variant === 'secondary' ? 'tech-badge-purple' :
    variant === 'accent' ? 'tech-badge-green' :
    '';

  return (
    <span className={`tech-badge ${variantClass}`}>
      {children}
    </span>
  );
}
