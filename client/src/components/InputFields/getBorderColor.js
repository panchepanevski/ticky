export default function getBorderColor(props) {
  const borderColors = {
    active: props.theme.colors.status_active,
    inprogress: props.theme.colors.status_in_progress,
    completed: props.theme.colors.status_completed
  };
  return borderColors[props.field];
}
