export function shift(array, direction, n)
{
    const times = n > array.length ? n % array.length : n

    return array.concat(array.splice(0, (direction > 0 ? array.length - times : times)))
}
