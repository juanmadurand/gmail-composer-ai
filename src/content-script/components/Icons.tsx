export const CommentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 96 960 960">
    <path d="M240 657h313v-60H240v60zm0-130h480v-60H240v60zm0-130h480v-60H240v60zM80 976V236q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880 236v520q0 23-18.5 41.5T820 816H240L80 976zm60-145l75-75h605V236H140v595zm0-595v595-595z"></path>
  </svg>
)

export const AppLogo = ({
  fill = '#7949c1',
  className = '',
}: {
  fill: string
  className: string
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="800"
    height="800"
    viewBox="0 0 24 24"
  >
    <g fill="none" fillRule="nonzero">
      <path
        d="M24 0v24H0V0h24zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018zm.265-.113l-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022zm-.715.002a.023.023 0 00-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092z"
        transform="translate(-240 -48) translate(240 48)"
      ></path>
      <path
        fill={fill}
        d="M20 4a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2v-1h2v1h16V7.423l-6.935 6.935a1.5 1.5 0 01-2.121 0L4 7.414V8H2V6a2 2 0 012-2h16zM6 13a1 1 0 01.117 1.993L6 15H1a1 1 0 01-.117-1.993L1 13h5zm-1-3a1 1 0 110 2H2a1 1 0 110-2h3z"
        transform="translate(-240 -48) translate(240 48)"
      ></path>
    </g>
  </svg>
)
