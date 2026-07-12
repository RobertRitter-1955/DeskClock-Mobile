from PIL import Image, ImageDraw


def create_icon(size, filename):

    img = Image.new(
        "RGB",
        (size, size),
        "#111111"
    )

    draw = ImageDraw.Draw(img)


    # Uhrkreis

    margin = int(size * 0.15)

    draw.ellipse(
        (
            margin,
            margin,
            size-margin,
            size-margin
        ),
        fill="#f5f5f5",
        outline="#dddddd",
        width=max(2, size//80)
    )


    center = size // 2


    # Stundenzeiger

    draw.line(
        (
            center,
            center,
            center,
            int(size*0.35)
        ),
        fill="#222222",
        width=max(3,size//40)
    )


    # Minutenzeiger

    draw.line(
        (
            center,
            center,
            int(size*0.68),
            center
        ),
        fill="#222222",
        width=max(2,size//55)
    )


    # Sekundenzeiger

    draw.line(
        (
            center,
            center,
            int(size*0.72),
            int(size*0.28)
        ),
        fill="#b42828",
        width=max(1,size//90)
    )


    # Mittelpunkt

    r = size//25

    draw.ellipse(
        (
            center-r,
            center-r,
            center+r,
            center+r
        ),
        fill="#b42828"
    )


    img.save(filename)



create_icon(
    192,
    "icons/icon-192.png"
)


create_icon(
    512,
    "icons/icon-512.png"
)


print("Icons erstellt")
