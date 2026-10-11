export function DemoNote({
  children = 'Converse com a Fritz para confirmar disponibilidade e indicação do serviço.',
}: {
  children?: string;
}) {
  return <small className="demo-note">{children}</small>;
}
