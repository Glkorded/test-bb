export type IProps = {
    id: { title: string; index: number };
    size: "big" | "small";
    selected: Record<string, number>
    setSelected: (selected: Record<string, number>) => void
    isEditing: boolean
}