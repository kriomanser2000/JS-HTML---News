function delNews(button)
{
    var listItem = button.parentNode;
    var newsList = listItem.parentNode;
    newsList.removeChild(listItem);
}