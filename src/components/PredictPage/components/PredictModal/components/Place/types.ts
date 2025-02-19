export type IProps = {
    place: IPlace
    size: 'big' | 'small'
    slots: Array<''>
    selected: Record<string, number>
    setSelected: (selected: Record<string, number>) => void
    isEditing: boolean
}

export type IPlace = {
    gridPlace: string,
    slots: number,
    title: string

}